import { ErrorHandler } from "@angular/core";

// handles all unexpected error of app
export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert("An unexpected error occured")
        console.log(error);
    }
}