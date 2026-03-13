using backend.Models;

namespace backend.Repositories;

public interface IUserRepository
{
    Task<User?> GetUserByEmail(string email);
    Task CreateUser(User user);
}