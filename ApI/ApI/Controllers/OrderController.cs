﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApI.Models;
using ApI.Models.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly APIContext _context;

        public OrderController(APIContext context)
        {
            _context = context;
        }

        //Get /api/order
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> Get()
        {
            return await _context.Orders.OrderBy(x => x.Id).ToListAsync();
        }

        //Post /api/orders
        [HttpPost("create")]
        public async Task<ActionResult<Order>> Create([FromForm] Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Create), order);

        }
    }
}
