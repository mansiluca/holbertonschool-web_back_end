#!/usr/bin/env python3
"""
Module that provides an async generator that yields a random number
"""
import asyncio

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Measure the runtime of async_comprehension
    """
    start_time = asyncio.get_event_loop().time()
    await async_comprehension()
    end_time = asyncio.get_event_loop().time()
    return end_time - start_time
