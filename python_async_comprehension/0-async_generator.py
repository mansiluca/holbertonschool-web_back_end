#!/usr/bin/env python3
"""
Module that provides an async generator that yields a random number
"""
import random
import asyncio
import typing


async def async_generator() -> typing.Generator[float, None, None]:
    """
    Async generator that yields a random number between 0 and 10
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
