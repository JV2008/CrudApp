using Microsoft.AspNetCore.Mvc;
using repositories; 
namespace controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly UserRepository _repository;
    private readonly IAuthService _authService;

    public AuthController(UserRepository repository, IAuthService authService)
    {
        _repository = repository;
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var user = await _repository.GetUserByEmail(request.Email);

        // Importante: Na vida real, use BCrypt para verificar o hash da senha!
        if (user == null || user.Password != request.Password)
            return Unauthorized("E-mail ou senha inválidos.");

        var token = _authService.GenerateToken(user);

        return Ok(new { 
            Token = token,
            User = new { user.Id, user.Name, user.Email } 
        });
    }
}       
    