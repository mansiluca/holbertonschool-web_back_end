# Python Async Comprehension

## Overview
This project focuses on asynchronous comprehensions and generators in Python. It explores how to use Python's async features effectively, including async comprehensions, async generators, and type annotations with async.

## Learning Objectives
By completing this project, you will learn how to:
- Write asynchronous generators
- Use async comprehensions
- Type-annotate generators properly

## Requirements
- Python 3.7 or higher
- All files should use the pycodestyle (version 2.5.x)
- All files should be executable
- All modules should have documentation
- All functions should be type-annotated

## Files
- `0-async_generator.py`: Contains an async generator function
- `1-async_comprehension.py`: Implements async comprehensions
- `2-measure_runtime.py`: Measures the runtime of async operations

## Tasks
### 0. Async Generator
Write a coroutine called `async_generator` that yields a random number between 0 and 10. The coroutine will loop 10 times, each time waiting 1 second asynchronously.

### 1. Async Comprehension
Write a coroutine called `async_comprehension` that collects 10 random numbers using an async comprehension over `async_generator`.

### 2. Run time for four parallel comprehensions
Write a `measure_runtime` coroutine that executes `async_comprehension` four times in parallel and measures the total runtime.