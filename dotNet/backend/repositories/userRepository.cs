using backend.Models;
using backend.Data;
using Dapper;

namespace backend.Repositories;

public class UserRepository : IUserRepository
{
    private readonly DbConnectionFactory _connectionFactory;

    public UserRepository(DbConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }

    public async Task<User?> GetUserByEmail(string email)
    {
        var connection = _connectionFactory.CreateConnection();

       var sql = "SELECT * FROM users WHERE email = @Email";

        return await connection.QueryFirstOrDefaultAsync<User>(sql, new { Email = email });
    }

    public async Task CreateUser(User user)
    {
       using var connection = _connectionFactory.CreateConnection();

        var sql = @"INSERT INTO users (name, email, password)
                    VALUES (@Name, @Email, @Password)";

        await connection.ExecuteAsync(sql, user);
    }
}