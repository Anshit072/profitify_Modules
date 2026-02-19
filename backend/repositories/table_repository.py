from database.connection import get_connection

class TableRepository:

    @staticmethod
    def get_all_tables():
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            SELECT name FROM sqlite_master
            WHERE type='table';
        """)

        data = [row["name"] for row in cursor.fetchall()]
        conn.close()
        return data

    @staticmethod
    def get_table_data(table_name):
        conn = get_connection()
        cursor = conn.cursor()

    # Get valid tables
        cursor.execute("""
        SELECT name FROM sqlite_master
        WHERE type='table';
        """)
        valid_tables = [row["name"] for row in cursor.fetchall()]

    # Validate table name
        if table_name not in valid_tables:
            conn.close()
            return {"error": "Invalid table name"}

    # Safe query after validation
        cursor.execute(f"SELECT * FROM {table_name}")
        rows = cursor.fetchall()

        conn.close()
        return [dict(row) for row in rows]