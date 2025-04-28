#!/usr/bin/env python3
"""
Module that provides an async generator that yields a random number
"""
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> float:
    """
    Async function that uses async_generator to yield random numbers
    and returns the sum of the first 10 numbers generated
    """
    return [i async for i in async_generator()]
