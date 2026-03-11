using Npgsql;
using Dapper;

namespace model;
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}

public record LoginRequest(string Email, string Password);
public interface IAuthService
{
     string GenerateToken(User user);
}

