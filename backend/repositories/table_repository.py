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

    # Validate table exists
        cursor.execute("""
        SELECT name FROM sqlite_master
        WHERE type='table' AND name=?;
        """, (table_name,))
    
        if not cursor.fetchone():
            conn.close()
            return []

        cursor.execute(f'SELECT * FROM "{table_name}"')
        rows = cursor.fetchall()

        conn.close()
        return [dict(row) for row in rows]