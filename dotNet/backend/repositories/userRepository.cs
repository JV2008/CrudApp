namespace repositories;

public class UserRepository
{
    private readonly string _connectionString = "Host=localhost;Port=5432;Database=postgres-container;Username=usuario;Password=12345678";

    public async Task CreateUser(User user)
    {
        using var connection = new NpgsqlConnection(_connectionString);
        await connection.ExecuteAsync("INSERT INTO users (name, email, password) VALUES (@Name, @Email, @Password)", user);
    }

    public async Task<User> GetUserByEmail(string email)
    {
        using var connection = new NpgsqlConnection(_connectionString);
        return await connection.QueryFirstOrDefaultAsync<User>("SELECT * FROM users WHERE email = @Email", new { Email = email });
    }

    public async Task UpdateUser(User user)
    {
        using var connection = new NpgsqlConnection(_connectionString);
        await connection.ExecuteAsync("UPDATE users SET name = @Name, email = @Email, password = @Password WHERE id = @Id", user);
    }

    public async Task DeleteUser(int id)
    {
        using var connection = new NpgsqlConnection(_connectionString);
        await connection.ExecuteAsync("DELETE FROM users WHERE id = @Id", new { Id = id });
    }

}

