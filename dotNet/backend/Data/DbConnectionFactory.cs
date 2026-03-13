using Npgsql;
using System.Data;
using Microsoft.Extensions.Configuration;

namespace backend.Data;

public class DbConnectionFactory
{
    private readonly IConfiguration _configuration;

    // Injetamos IConfiguration para pegar a connection string
    public DbConnectionFactory(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    // Método que retorna uma conexão aberta com o PostgreSQL
    public IDbConnection CreateConnection()
    {
        var connectionString = _configuration.GetConnectionString("DefaultConnection");

        var connection = new NpgsqlConnection(connectionString);
        connection.Open();

        return connection;
    }
}

