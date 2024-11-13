# ES14
ECMAScript 2023 (also known as ES14) is the most recent version of the standard that defines the JavaScript language. It was officially approved in June 2023 by TC39, the committee that maintains and develops ECMAScript. Among its main features and improvements are the following:


1. **Array and TypedArray methods** `findLast` and `findLastIndex`: These methods allow you to search for the last element of an array that meets a condition. They work similarly to `find` and `findIndex`, but instead of starting the search from the beginning, they search from the end.
    * `findLast`: returns the last element that meets the condition.
    * `findLastIndex`: returns the index of the last element that meets the condition.

1. **`toSorted`, `toReversed`, `toSpliced` and `with` in Arrays**: These methods provide immutable ways to modify arrays.
    * `toSorted`: creates a new ordered copy of the array without modifying the original.
    * `toReversed`: returns a copy of the inverted array.
    * `toSpliced`: allows you to perform an operation similar to `splice`, but without modifying the original array..
    * `with`: returns a copy of the array with a replaced element at a specific position.

