#!/usr/bin/env python3
"""
Module that provides a function to create an asyncio.Task for wait_random
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Create and return an asyncio.Task for wait_random
    Args:
        max_delay (int): maximum delay in seconds
    Returns:
        asyncio.Task: Task that executes wait_random with max_delay
    """
    return asyncio.create_task(wait_random(max_delay))
