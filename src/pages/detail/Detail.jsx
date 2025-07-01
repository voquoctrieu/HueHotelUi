import React from 'react';
import BannerBooking from '../../assets/img/banner-booking.jpg';
import { Box, Typography } from '@mui/material';
import Footer from '../../components/layout/footer/Footer';
import HeaderBooking from '../../components/layout/header/HeaderBooking';
import BookRoomDetail from '../../components/layout/form/BookRoomDetail';
import FacilitiesDetail from '../../components/ui/facilities/FacilitiesDetail';
import HotelIcon from '@mui/icons-material/Hotel';
import ShowerIcon from '@mui/icons-material/Shower';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AirIcon from '@mui/icons-material/Air';
import LockIcon from '@mui/icons-material/Lock';
import WifiIcon from '@mui/icons-material/Wifi';
import GroupsIcon from '@mui/icons-material/Groups';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import LocationCityIcon from '@mui/icons-material/LocationCity';
function Detail() {
  const style1 = {
    flex: '0 0 40%',
  };
  const style2 = {
    flex: '0 0 40%',
    border: ' 1px solid black',
    borderRadius: '10px',
    ':hover': {
      cursor: 'pointer',
    },
  };
  return (
    <Box
      sx={{
        width: '1500px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        borderRadius: '30px',
      }}
    >
      <HeaderBooking img={BannerBooking} title={'CHI TIẾT PHÒNG'} />
      <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}
      >
        <Box
          sx={{
            width: '60%',
          }}
        >
          <Box
            sx={{
              height: '100px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid black',
              m: '30px 0 0',
            }}
          >
            <Box>
              <Typography variant='h3' fontFamily='THCartoon9'>
                Phong Don
              </Typography>
              <Typography variant='h6'>Dac diem phong</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 1,
                  color: 'black',
                  fontSize: '30px',
                  fontWeight: 'bold',
                }}
              >
                <Typography
                  sx={{
                    color: 'black',
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  Tu
                </Typography>
                <Typography
                  sx={{
                    textDecoration: 'line-through',
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  330k/Dem
                </Typography>
              </Box>
              <Typography
                sx={{ color: 'red', fontSize: '30px', fontWeight: 'bold' }}
              >
                280k/Dem{' '}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: 'flex', flexWrap: 'wrap', gap: '40px', m: '50px 0' }}
          >
            <Box sx={style1}>
              <FacilitiesDetail
                img={HotelIcon}
                title={'Giường'}
                description={'1 Giường Đơn'}
              />
            </Box>
            <Box sx={style1}>
              <FacilitiesDetail
                img={GroupsIcon}
                title={'Số người'}
                description={'1 Người'}
              />
            </Box>
            <Box sx={style1}>
              <FacilitiesDetail
                img={FitScreenIcon}
                title={'Kích thước'}
                description={'35m'}
              />
            </Box>
            <Box sx={style1}>
              <FacilitiesDetail
                img={LocationCityIcon}
                title={'Tầm Nhìn'}
                description={'Hướng ra vườn'}
              />
            </Box>
          </Box>
          <Box sx={{ borderBottom: '1px solid black', pb: '50px' }}>
            <Typography
              sx={{ fontSize: '18px', textAlign: 'justify', m: '0 auto' }}
            >
              Tận hưởng sự thoải mái tối đa trong 18 phòng nghỉ tại trung tâm
              thành phố Huế. Được thiết kế theo phong cách Tân Cổ Điển, không
              gian mang hơi thở nhẹ nhàng và thanh lịch, vừa hiện đại vừa đậm
              chất hoài niệm của vùng đất kinh kỳ.Phòng có diện tích rộng 35m²,
              bố trí thông minh với không gian ấm cúng, cùng 3 cặp phòng nối
              liền thích hợp cho gia đình hoặc nhóm bạn. Màu sắc chủ đạo là tông
              sáng nhẹ, kết hợp hài hòa với nội thất uốn lượn mềm mại, tạo cảm
              giác thư thái và sang trọng.
            </Typography>
          </Box>
          <Box sx={{ m: '20px 0' }}>
            <Typography variant='h4' sx={{ fontFamily: 'THCartoon9' }}>
              Tiện ích sẵn có
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px',
                m: '50px 0',
              }}
            >
              <Box sx={style2}>
                <FacilitiesDetail img={ShowerIcon} title={'Phòng tắm'} />
              </Box>
              <Box sx={style2}>
                <FacilitiesDetail img={WifiIcon} title={'Wifi'} />
              </Box>
              <Box sx={style2}>
                <FacilitiesDetail img={SmokeFreeIcon} title={'Cấm thuốc'} />
              </Box>
              <Box sx={style2}>
                <FacilitiesDetail img={LocalPhoneIcon} title={'Điện thoại'} />
              </Box>
              <Box sx={style2}>
                <FacilitiesDetail img={AirIcon} title={'Điều hòa'} />
              </Box>
              <Box sx={style2}>
                <FacilitiesDetail img={LockIcon} title={'Két sắt'} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '20px', fontFamily: 'THCartoon9' }}>
            Đặt Phòng
          </Typography>
          <BookRoomDetail />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Detail;
