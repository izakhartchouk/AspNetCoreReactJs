using System.Linq;
using AutoMapper;
using Domain;

namespace Application.Activities
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Activity, ActivityDto>();
            CreateMap<UserActivity, AttendeeDto>()
                .ForMember(dst => dst.Username, o => o.MapFrom(src => src.AppUser.UserName))
                .ForMember(dst => dst.DisplayName, o => o.MapFrom(src => src.AppUser.DisplayName))
                .ForMember(dst => dst.Image, o => o.MapFrom(src => src.AppUser.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(dst => dst.Following, o => o.MapFrom<FollowingResolver>());
        }
    }
}