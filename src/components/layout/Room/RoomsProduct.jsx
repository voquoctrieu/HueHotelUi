import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Banguoi from '../../../assets/img/3nguoi.jpg';
import Bonnguoi from '../../../assets/img/4nguoi.jpg';
import Don from '../../../assets/img/don.jpg';
import Doi2giuong from '../../../assets/img/doi2giuong.jpg';
import Product from '../../ui/product/Product';
import Hoa from '../../../assets/img/hoa.jpg';
function RoomsProduct() {
  const styleProduct = {
    flex: '0 0 25%',
    p: '0px',
  };
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 4,
        position: 'relative',
        m: '50px 0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h2' sx={{ fontFamily: 'THCartoon9' }}>
          Phòng nghỉ giữa cố đô
        </Typography>
        <Typography
          variant='h6'
          sx={{ m: '30px auto', width: '60%', textAlign: 'center' }}
        >
          Phòng nghỉ ấm cúng, mang hơi thở dịu dàng của xứ Huế. Nội thất được
          bày trí tinh tế, kết hợp hài hòa giữa nét hiện đại và chút hoài cổ,
          mang lại cảm giác thân thuộc như đang ở chính ngôi nhà nhỏ giữa lòng
          cố đô.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 5,
          justifyContent: 'center',
        }}
      >
        <Box sx={styleProduct}>
          <Product
            img={Hoa}
            sale={30}
            price={290}
            titleRoom={'Phòng Đơn'}
            bedCount={'1 Giường Đơn'}
            peopleCount={'1 Người'}
          />
        </Box>
        <Box sx={styleProduct}>
          <Product
            img={Don}
            sale={30}
            price={400}
            titleRoom={'Phòng Đôi/1Giường'}
            bedCount={'1 Giường Đôi'}
            peopleCount={'2 Người'}
          />
        </Box>
        <Box sx={styleProduct}>
          <Product
            img={Doi2giuong}
            sale={30}
            price={420}
            titleRoom={'Phòng Đôi/2Giường'}
            bedCount={'2 Giường Đơn'}
            peopleCount={'2 Người'}
          />
        </Box>
        <Box sx={styleProduct}>
          <Product
            img={Banguoi}
            sale={30}
            price={500}
            titleRoom={'Phòng 3 Người'}
            bedCount={'3 Giường Đơn'}
            peopleCount={'4 Người'}
          />
        </Box>
        <Box sx={styleProduct}>
          <Product
            img={Bonnguoi}
            sale={30}
            price={700}
            titleRoom={'Phòng Gia Đình'}
            bedCount={'2 Giường Đôi'}
            peopleCount={'4 Người'}
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          width: '50%',
          height: '80%',
          backgroundColor: '#d3d2d266',
          top: 0,
          borderRadius: '25px',
          zIndex: -1,
        }}
      ></Box>
    </Box>
  );
}

export default RoomsProduct;
