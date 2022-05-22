import React from 'react';

const url = "http://127.0.0.1:8080/SimpleLibrarySpring/dashboard"

export async function GetBooksRequest(authString) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.open("GET", url, true);
        request.setRequestHeader("Authorization", authString);
        console.log(authString);
        request.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.status)
                switch (this.status) {
                    case 200:
                        resolve(this.responseText);
                    default:
                        reject("Status: " + this.status + ", Response: " + this.responseText + ", State: " + this.readyState);
                }
            }
        }
        request.send();
    });
}

export async function AddBookRequest(authString, title, author, year) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.open("POST", url, true);
        request.setRequestHeader("Authorization", authString);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.status)
                switch (this.status) {
                    case 200:
                        resolve();
                    case 401:
                    case 403:
                        reject("You are not authorized to add book");
                    default:
                        reject("Unable to add book");
                }
            }
        }
        request.send('{"title" : "' + title + '","author": "' + author + '","year": "' + year + '"}');
    });
}

export async function RemoveBookRequest(authString, id) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.open("DELETE", url + "/" + id, true);
        request.setRequestHeader("Authorization", authString);
        request.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.status)
                switch (this.status) {
                    case 200:
                        resolve();
                    case 401:
                    case 403:
                        reject("You are not authorized to remove book");
                    default:
                        reject("Unable to remove book");
                }
            }
        }
        request.send();
    });
}