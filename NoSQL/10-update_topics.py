#!/usr/bin/python3
"""
Main file
"""


def update_topics(mongo_collection, name, topics):
    """
    Updates the topics of a school document based on the name
    """
    if mongo_collection is None:
        return

    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
