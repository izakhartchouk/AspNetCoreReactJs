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
                .ForMember(dst => dst.DisplayName, o => o.MapFrom(src => src.AppUser.DisplayName));
        }
    }
}