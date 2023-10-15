import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Space, Button, Row, Col} from 'antd';
import { FloatButton } from 'antd';
import {
  HomeFilled,
  SearchOutlined,
  PlusCircleOutlined,
  HeartOutlined,
  UserOutlined,
} from '@ant-design/icons';

export default function SideBar() {
  const [value, setValue] = React.useState(0);

  return (
    // <Box sx={{ width: 80, height: 500, marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //     <BottomNavigation sx= {{ display: 'flex', flexDirection: 'column', backgroundColor: 'darkgrey', borderRadius: '10px'}}
    //       showLabels
    //       value={value}
    //       onChange={(event, newValue) => {
    //         setValue(newValue);
    //       }}
    //     >
          
    //         <BottomNavigationAction icon={<HomeIcon />} />
    //         <BottomNavigationAction icon={<SearchOutlinedIcon />} />
    //         <BottomNavigationAction icon={<AddCircleOutlineOutlinedIcon />} />
    //         <BottomNavigationAction icon={<FavoriteBorderIcon />} />
    //         <BottomNavigationAction icon={<PersonOutlineRoundedIcon />} />
         
    //     </BottomNavigation>
    // </Box>
    // <Row justify="space-around" align="middle">
    //   <Col>
    //   <Space.Compact direction="vertical">
    //     <Button ghost shape="circle"><HomeIcon /></Button>
    //     <Button ><SearchOutlinedIcon /></Button>
    //     <Button ><AddCircleOutlineOutlinedIcon /></Button>
    //     <Button ><PersonOutlineRoundedIcon /></Button>
    //   </Space.Compact>
    //   </Col>
    // </Row>
    <FloatButton.Group
    shape="square"
    style={{
      left: 60,
      top:80,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    }}
    >
        <FloatButton icon={<HomeFilled />} />
        <FloatButton icon={<SearchOutlined />} />
        <FloatButton icon={<PlusCircleOutlined />} />
        <FloatButton icon={<HeartOutlined />} />
        <FloatButton icon={<UserOutlined />} />
    </FloatButton.Group>
  );
}