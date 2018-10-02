// data.service.ts - For Web

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError as throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/*
 * Shared Utilities
 */

interface RequestOptions {
  url?: string; // this option is required, all others are optional
  method?: string;
  json?: boolean; // Automatically stringifies the body to JSON
  encoding?: string;
  headers?: {};
  form?: any; // use form to send the data as 'application/x-www-form-urlencoded'
  body?: any; // use body to send the data as 'application/json'
  data?: any; // use body to send the data as 'application/json'
  responseType?: string;
}

@Injectable()
export class DataService {
  private mockData = {}
  private requestOptions: RequestOptions = {};

  constructor(private http: HttpClient) {

    // this.mockDataInit();

  }

  // async mockDataInit() {

    // // For Web
    // if (!isNativeScript()) {
    //   // resolve mockdata with webpack at compile time so its available for web, because web has no filesystem access like native
    //   require('file-loader!../../../apps/web-dynocard/src/assets/dataset1.csv')
    //     .then((response) => {
    //       this.mockData = response;
    //     })
    //     .catch((err) => {
    //       return err;
    //     });
    //
    //   // For nativescript
    // }
    // else {
    //   // Nativescript will use `file-system` to access the file locally, at a different path than webpack
    //   this.fileReader.readJSON("../../assets/mock-data/course-plan")
    //     .then((response) => {
    //       this.mockData = response;
    //     })
    //     .catch((err) => {
    //       err;
    //     });
    // }
  // }

  get(url: string, requestOptionsArgs?, options?: { mockData: boolean, mockDataFile?: string }): Observable<any> {
    const self = this;

    // clear and reset the state of headers before each request, to prevent issues with mixing states between requests
    delete this.requestOptions;

    if (options) {
      if (!options.mockData) {
      } else if (options.mockData === true) {

        // Until nodejs server is setup, just return json directly here
        // passed in value should be relative too `src` root i.e. if its located at ./src/path-to-asset/here.txt, then just enter path-to-asset/here.txt
        const mockData = this.mockData[options.mockDataFile];
        return of(mockData);
      }
      // If options.mockData is false or not set
      // If the statement gets to here, it needs to be \`true\`, else throw error
      else if (!options.mockData === true) {
        throw new Error("mockData not set to boolean type. Must be true or false.");
      }

    }

    // The Angular HttpClient Way
    const requestOptions = {
      // headers: contentHeaders
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };


    return this.http
      .get(url, requestOptionsArgs
        ? requestOptionsArgs
        : requestOptions)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('GET')),
      )
  }

  post(url: string, body: any, contentType?: string, requestOptionsArgs?, options?: { mockData: boolean }): Observable<any> {
    const self = this;
    // clear and reset the state of headers before each request, to prevent issues with mixing states between requests
    delete this.requestOptions;

    // The Angular HttpClient Way
    // return new Promise((resolve, reject) => {
    const requestOptions = {
      // headers: contentHeaders
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http
      .post(url, body, requestOptionsArgs
        ? requestOptionsArgs
        : requestOptions)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('POST'))
      )
  }

  handleError(operation = 'operation', result?) {

    return (error: any): Observable<any> => {

      console.error('error: ', error);
      console.error(`${operation} failed: ${error.message}`);

      let errorMessage = error || 'Server error';

      if (error.error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
        errorMessage = error.error.message;

        // Status Code 0 probable means CORS was not enabled on the API endpoint
      } else if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.

        const corsMessage = 'This most likely means that CORS is not enabled for the requested API endpoint. Enable `Access-Control-Allow-Origin` on the server and try again';

        console.error('DataService: An error occurred:', error);
        console.error('DataService: ', corsMessage);
        errorMessage = corsMessage;

      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError({
        message: error.message,
        displayMessage: errorMessage
      });
    };
  }


}
