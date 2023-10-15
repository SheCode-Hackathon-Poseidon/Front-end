// import React, { useState } from 'react';
// import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
// // import './CreatePost.css';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [status, setStatus] = useState('');
//   const [shareMode, setShareMode] = useState('');

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleContentChange = (event) => {
//     setContent(event.target.value);
//   };

//   const handleStatusChange = (event) => {
//     setStatus(event.target.value);
//   };

//   const handleShareModeChange = (event) => {
//     setShareMode(event.target.value);
//   };

//   const handlePostSubmit = (event) => {
//     event.preventDefault();

//     // Create a post object with the entered data
//     const newPost = {
//       title,
//       content,
//       status,
//       shareMode,
//     };

//     // Save the post object to the database or perform other actions
//     savePostToDatabase(newPost);

//     // Clear the form fields
//     setTitle('');
//     setContent('');
//     setStatus('');
//     setShareMode('');
//   };

//   const savePostToDatabase = (post) => {
//     // Function to save the post to the database
//     // Replace this with your own implementation
//     console.log(post);
//   };

//   return (
//     <div className="create-post-container">
//       <Grid container justifyContent="center">
//         <Grid item xs={12} sm={6} md={4}>
//           <div className="create-post-card">
//             <h2>Create a Post</h2>
//             <form onSubmit={handlePostSubmit}>
//               <TextField
//                 id="title"
//                 label="Title"
//                 value={title}
//                 onChange={handleTitleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 id="content"
//                 label="Content"
//                 value={content}
//                 onChange={handleContentChange}
//                 multiline
//                 rows={4}
//                 fullWidth
//                 margin="normal"
//               />
//               <FormControl fullWidth margin="normal">
//                 <InputLabel id="status-label">Status</InputLabel>
//                 <Select
//                   id="status"
//                   value={status}
//                   onChange={handleStatusChange}
//                   labelId="status-label"
//                 >
//                   <MenuItem value="">Select status</MenuItem>
//                   <MenuItem value="A">A</MenuItem>
//                   <MenuItem value="B">B</MenuItem>
//                 </Select>
//               </FormControl>
//               <FormControl fullWidth margin="normal">
//                 <InputLabel id="share-mode-label">Share Mode</InputLabel>
//                 <Select
//                   id="shareMode"
//                   value={shareMode}
//                   onChange={handleShareModeChange}
//                   labelId="share-mode-label"
//                 >
//                   <MenuItem value="">Select share mode</MenuItem>
//                   <MenuItem value="public">Public</MenuItem>
//                   <MenuItem value="private">Private</MenuItem>
//                 </Select>
//               </FormControl>
//               <Button variant="contained" color="primary" type="submit">
//                 Post
//               </Button>
//             </form>
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default CreatePost;

import React, { useState } from 'react';
import userStore from '../stores/user'
import { Autocomplete, Box, Container, Stack} from '@mui/material'
import Layout from '../components/layout/layout'
import { toast } from 'react-toastify'
import { Send } from '@mui/icons-material'
import { createPost } from '../api/post'
import { Select, Space, Input, Row, Col, Typography, Card, Button } from 'antd';

import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const { TextArea } = Input;
const { Title } = Typography;

  

export default function CreatePost(){
    const centeredForm = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw"
    }

    const { user } = userStore((state) => state)
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('todo');
    const [shareMode, setShareMode] = useState('public');
    const [tag, setTag] = useState('Sức khỏe')
  
    const handleCKEditorState = (event, editor) => {
      const data = editor.getData()
      setDescription(data)
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    
    const handleDiscriptionChange = (event) => {
        setDescription(event.target.value);
    };
    
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };
    
    const handleShareModeChange = (event) => {
        setShareMode(event.target.value);
    };
  
    const handleTagChange = (event) => {
        setTag(event.target.value);
    }
  
    const handleSubmitPost = async () => {
      const now = moment().format('YYYY-MM-DD HH:mm:ss')
  
      const res = await createPost({
        token: window.user_token,
        name: name,
        description: description,
        status: status,
        share_mode: shareMode,
        tag: tag
      })
      console.log("Submit create post ", res)
  
      if (name === '' || description === '') {
        toast.error('Please fill up all attributes!')
      } 
    }
  
    return (
    <div style={centeredForm}>
        <Card style={{backgroundColor: "#F8F8F8", }}>
            <div style={{justifyContent: 'center', alignItems: 'center'}}>
            <Space direction="vertical" size="middle" style={{ display: 'flex', height: '100%', width: '100%', marginTop: '100px'}}>
                <Row>
                    <Col  >
                        <Title level={3}>Tạo mục tiêu</Title>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={24}>
                        <Input 
                            placeholder="Tên mục tiêu" 
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <TextArea rows={4} placeholder="Mô tả" onChange={(e) => {
                            setDescription(e.target.value)
                        }} />
                    </Col>
                </Row>

                <Row >
                    <Col span={24}>
                        <Row justify="space-between">
                            <Col span={8}>
                                <Space wrap>
                                    <Select
                                        defaultValue="todo"
                                        style={{ width: 120 }}
                                        options={[
                                            { value: 'todo', label: 'Dự định' },
                                            { value: 'doing', label: 'Đang thực hiện' },
                                            { value: 'finished', label: 'Đã hoàn thành' },
                                        ]}
                                        onChange={(value) => { setStatus(value)
                                        console.log("Status ", value) }}

                                    />
                                </Space>
                            </Col>
                            <Col span={8}>
                                <Space wrap>
                                    <Select
                                        defaultValue="public"
                                        style={{ width: 120 }}
                                        options={[{ value: 'public', label: 'Public' },
                                            { value: 'private', label: 'Private' }
                                        ]}
                                        onChange={(value) => { 
                                            setShareMode(value) 
                                            console.log("share mode ", value) }
                                        }

                                    />
                                </Space>
                            </Col>

                            <Col span={8}>
                                <Space wrap>
                                    <Select
                                        defaultValue="Sức khỏe"
                                        style={{ width: 120 }}
                                        options={[
                                            { value: 'Sức khỏe', label: 'Sức khỏe' },
                                            { value: 'Học tập', label: 'Học tập' },
                                            { value: 'Dự án', label: 'Dự án' },
                                            { value: 'Phát triển bản thân', label: 'Phát triển bản thân' },
                                        ]}
                                        onChange={(value) => { setTag(value) }}
                                    />
                                </Space>
                            
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>

                <Row>
                    <Col span={24}>
                        <Button type="primary" shape="round" style={{width: '100%'}} 
                        onClick={() => handleSubmitPost()}>
                            Thêm
                        </Button>
                    </Col>
                </Row>
            </Space>
            </div>
            
        </Card>
        
      </div>
    )
  }
  