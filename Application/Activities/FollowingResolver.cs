using System.Linq;
using Application.Interfaces;
using AutoMapper;
using Domain;
using Persistence;

namespace Application.Activities
{
    public class FollowingResolver : IValueResolver<UserActivity, AttendeeDto, bool>
    {
        private readonly IUserAccessor _userAccessor;
        private readonly DataContext _context;

        public FollowingResolver(DataContext context, IUserAccessor userAccessor)
        {
            _context = context;
            _userAccessor = userAccessor;
        }

        public bool Resolve(UserActivity source, AttendeeDto destination, bool destMember, ResolutionContext context)
        {
            var currentUser = _context.Users.SingleOrDefault(x => x.UserName == _userAccessor.GetCurrentUsername());

            return currentUser.Followings.Any(x => x.TargetId == source.AppUserId);
        }
    }
}