from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from controllers.table_controller import router as table_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(table_router)