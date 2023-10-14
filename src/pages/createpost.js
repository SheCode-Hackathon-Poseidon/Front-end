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
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import userStore from '../stores/user'
import { Autocomplete, Box, Container, Stack, Typography} from '@mui/material'
import Layout from '../components/layout/layout'
import { toast } from 'react-toastify'
import { Send } from '@mui/icons-material'
import { createPost } from '../api/post'

import moment from 'moment'
import { useNavigate } from 'react-router-dom'

export default function CreatePost(){
    const { user } = userStore((state) => state)
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('');
    const [shareMode, setShareMode] = useState('');
    const [tag, setTag] = useState('')
  
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
        id: user.ID,
        name: name,
        description: description,
        status: status,
        create_at: now,
        updated_at: now,
        share_mode: shareMode,
        tag: tag
      })
  
      if (name === '' || description === '') {
        toast.error('Please fill up all attributes!')
      } 
    }
  
    return (
      <div border-style='solid'>
        <Container
            maxWidth="sm"
            sx={{
            mt: 10,
            }}
        >

        <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Create a new project
        </Typography>
        </Box>

        <Stack direction="column" spacing={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <TextField
                variant="outlined"
                label="Name"
                id="name"
                value={name}
                size="normal"
                sx={{ backgroundColor:'#efefef'}}
                onChange={(e) => {
                    setName(e.target.value)
                }}
                />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <TextField
                variant="outlined"
                label="Description"
                id="description"
                value={description}
                size="normal"
                sx={{ backgroundColor:'#efefef'}}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                />
            </Box>

            <FormControl fullWidth margin="normal">
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                    id="status"
                    value={status}
                    onChange={handleStatusChange}
                    labelId="status-label"
                    sx={{ backgroundColor:'#efefef'}}
                >
                    <MenuItem value="todo">To do</MenuItem>
                    <MenuItem value="doing">Doing</MenuItem>
                    <MenuItem value="finished">Finished</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="share-mode-label">Share Mode</InputLabel>
                <Select
                    id="shareMode"
                    value={shareMode}
                    onChange={handleShareModeChange}
                    labelId="share-mode-label"
                    sx={{ backgroundColor:'#efefef'}}
                >
    \                  <MenuItem value="public">Public</MenuItem>
                    <MenuItem value="private">Private</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="share-tag-label">Tag</InputLabel>
                <Select
                    id="tag"
                    value={tag}
                    onChange={handleTagChange}
                    labelId="share-tag-label"
                    sx={{ backgroundColor:'#efefef'}}
                >
                    <MenuItem value="public">Java</MenuItem>
                    <MenuItem value="private">CPP</MenuItem>
                </Select>
            </FormControl>
            <Stack direction="row" spacing={2} sx={{ minWidth: 600, justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={handleSubmitPost} endIcon={<Send />}>
                Post
                </Button>
            </Stack>
        </Stack>
        </Container>
      </div>
    )
  }
  