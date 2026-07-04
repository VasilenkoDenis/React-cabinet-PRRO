import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useState } from 'react';
function AddTodo(props) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }; 

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleAddTodo = () => {
 
    props.addTodo(title, description);
    handleReset();

  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <div>      
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography component="span">Додати завдання</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack>
                    <TextField size="small" label="Заголовок завдання" value={title} onChange={handleChangeTitle}/>
                    <TextField size="small" label="Опис завдання" value={description} onChange={handleChangeDescription}/>
                </Stack>
            </AccordionDetails>
            <AccordionActions>
                <Button onClick={handleReset} >Скасувати</Button>
                <Button onClick={handleAddTodo}>Додати</Button>
            </AccordionActions>
        </Accordion>
    </div>
  )
}

export default AddTodo
