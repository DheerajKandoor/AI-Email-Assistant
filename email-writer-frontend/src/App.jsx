import { useState } from 'react'
import { Container, Typography, Box, TextField, FormControl, InputLabel, MenuItem, Select, Button, CircularProgress } from '@mui/material'
import './App.css'
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setGeneratedReply(''); // clear old reply
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });

      // handle both string and object response safely
      const replyText = typeof response.data === 'string'
        ? response.data
        : JSON.stringify(response.data);

      setGeneratedReply(replyText);
    } catch (error) {
      console.error(error);
      setGeneratedReply('Error generating reply.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Email Reply Generator
      </Typography>

      <Box sx={{ mx: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Original Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="tone-select-label">Tone (Optional)</InputLabel>
          <Select
            labelId="tone-select-label"
            id="tone-select"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Professional">Professional</MenuItem>
            <MenuItem value="Casual">Casual</MenuItem>
            <MenuItem value="Friendly">Friendly</MenuItem>  
          </Select>
        </FormControl>

        <Button 
          variant="contained" 
          sx={{ mb: 2 }}
          onClick={handleSubmit} 
          disabled={!emailContent || loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
        </Button>

        {/* Show generated reply only once here */}
        {generatedReply && (
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply}
              inputProps={{ readOnly: true }}
              sx={{ mb: 2 }}
            />
            <Button 
              variant="outlined"
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              Copy to Clipboard
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  )
}

export default App;
