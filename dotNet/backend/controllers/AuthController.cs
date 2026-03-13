using backend.Models;
using backend.Services;
using backend.Utils;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IUserService _service;
    private readonly JwtService _jwt;

    public AuthController(IUserService service, JwtService jwt)
    {
        _service = service;
        _jwt = jwt;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(User user)
    {
        await _service.Register(user);
        return Ok();
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(User login)
    {
        var user = await _service.Login(login.Email, login.Password);

        if (user == null)
            return Unauthorized();

        var token = _jwt.GenerateToken(user);

        return Ok(new
        {
            token = token,
            user = new
            {
                name = user.Name,
                email = user.Email
            }


        });
    }
}