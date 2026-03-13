using backend.Models;

namespace backend.Services;

public interface IUserService
{
    Task Register(User user);
    Task<User?> Login(string email, string password);
}