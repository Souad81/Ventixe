using WebPresentation.Models;

namespace WebPresentation.Services
{
    public interface IBookingService
    {
        Task<BookingResult> CreateBookingAsync(CreateBookingRequest request);
    }
}