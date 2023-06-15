import { FormEvent, useState, useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";
import "./App.css";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import {Header} from './Header'

type FormElement = FormEvent<HTMLFormElement>;

interface ITask {
  name: string;
  done: boolean;
}

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const inputTask = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    inputTask.current?.focus()
  };

  const addTask = (name: string): void => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const toggleDoneTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  const removeTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks)
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', placeItems: "center", marginTop: '20px'}}>
    
      <Header />
      <div className="cardtask" style={{ marginTop: '20px'}}>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            ref={inputTask}
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            autoFocus
            style={{ width: "350px" }}
            
          />
          <Button
            type="submit"
            color="success"
            variant="contained"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            Guardar
          </Button>
        </form>
        {tasks.map((t: ITask, i: number) => (
          <div>
            <Card key={i} sx={{ width: 250, height: "auto", marginTop: "20px" }}>
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  style={{ textDecoration: t.done ? "line-through" : "" }}
                >
                  {t.name}
                </Typography>
                <Box
                  sx={{
                    marginTop: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button variant="contained" onClick={() => toggleDoneTask(i)}>
                    {t.done ? (
                      <CheckCircleOutlineRoundedIcon />
                    ) : (
                      <ClearRoundedIcon />
                    )}
                  </Button>
                  <Button onClick={() => removeTask(i)}>
                    <DeleteForeverTwoToneIcon color="error" />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default App;
