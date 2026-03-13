using backend.Models;
using backend.Repositories;

namespace backend.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _repository;

    public UserService(IUserRepository repository)
    {
        _repository = repository;
    }

    public async Task Register(User user)
    {
        await _repository.CreateUser(user);
    }

    public async Task<User?> Login(string email, string password)
    {
        var user = await _repository.GetUserByEmail(email);

        if (user == null || user.Password != password)
            return null;

        return user;
    }
}