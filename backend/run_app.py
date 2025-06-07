#!/usr/bin/env python
"""
Entry point script for running the FastAPI application.
This avoids the module name duplication issue with mypy.
"""
import uvicorn

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
