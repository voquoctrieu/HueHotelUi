import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow } from '../../utils/arrowCarousel';
import Hoa from '../../../assets/img/hoa.jpg';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import GroupsIcon from '@mui/icons-material/Groups';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RoomProduct from '../../ui/product/Product';
function Contact() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '800px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 4,
        position: 'relative',
        mb: '50px',
      }}
    >
      <Box
        sx={{
          margin: 'auto',
          width: '80%',
          flexGrow: 1,
          marginTop: '30px',
          // padding: '100px',
          // backgroundColor: '#000000bf',
          borderRadius: '50px',
        }}
        id='Skills'
      >
        <Grid container spacing={3} justifyContent='center'>
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: 'center',
                color: 'black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant='h2' sx={{ fontFamily: 'THCartoon9' }}>
                Phòng nghỉ giữa cố đô
              </Typography>
              <Typography
                variant='h6'
                sx={{ m: '30px auto', width: '60%', textAlign: 'center' }}
              >
                Phòng nghỉ ấm cúng, mang hơi thở dịu dàng của xứ Huế. Nội thất
                được bày trí tinh tế, kết hợp hài hòa giữa nét hiện đại và chút
                hoài cổ, mang lại cảm giác thân thuộc như đang ở chính ngôi nhà
                nhỏ giữa lòng cố đô.
              </Typography>

              <Carousel
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                arrows
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                containerClass='carousel-container'
                itemClass='carousel-item-padding-40-px carousel-item-padding'
              >
                {/* RoomProduct(img, sale, price,titleRoom,bedCount,peopleCount) */}
                <RoomProduct
                  img={Hoa}
                  sale={30}
                  price={320}
                  titleRoom={'Phòng Gia Đình'}
                  bedCount={'2 Giường Đôi'}
                  peopleCount={'4 Người'}
                />
                <RoomProduct
                  img={Hoa}
                  sale={30}
                  price={320}
                  titleRoom={'Phòng Gia Đình'}
                  bedCount={'2 Giường Đôi'}
                  peopleCount={'4 Người'}
                />
                <RoomProduct
                  img={Hoa}
                  sale={30}
                  price={320}
                  titleRoom={'Phòng Gia Đình'}
                  bedCount={'2 Giường Đôi'}
                  peopleCount={'4 Người'}
                />
                <RoomProduct
                  img={Hoa}
                  sale={30}
                  price={320}
                  titleRoom={'Phòng Gia Đình'}
                  bedCount={'2 Giường Đôi'}
                  peopleCount={'4 Người'}
                />
                <RoomProduct
                  img={Hoa}
                  sale={30}
                  price={320}
                  titleRoom={'Phòng Gia Đình'}
                  bedCount={'2 Giường Đôi'}
                  peopleCount={'4 Người'}
                />
              </Carousel>
              <Button
                sx={{
                  width: '208px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'black',
                  margin: '20px auto',
                  borderBottom: '1px solid black',
                  borderRadius: '0',
                }}
              >
                <Typography>Xem Tất Cả Các Phòng</Typography>
                <ChevronRightIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '50%',
          height: '105%',
          backgroundColor: '#d3d2d266',
          top: 0,
          borderTopRightRadius: '25px',
          zIndex: -1,
        }}
      ></Box>
    </Box>
  );
}

export default Contact;
