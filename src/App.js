import {useGetPersonsQuery} from "./store/api.slice";
import React, {useEffect, useState} from "react";
import {Paper, Container, Stack} from "@mui/material";
import PersonCard from "./PersonCard";
import EastIcon from '@mui/icons-material/East';
import PersonInfo from "./PersonInfo";

function App() {
    const [persons, setPersons] = useState([])
    const {data, error, isLoading } = useGetPersonsQuery()
    const [selected, setSelected] = useState(0)

    useEffect(()=>{
        if(!isLoading){
            let persons = data["data"]["content"].filter(child => child.title === "Персоны")
            setPersons(persons[0])
        }
    }, [isLoading])

    const selectPerson = (id) => {
        console.log('got')
        setSelected(id)
    }

    return (
        <div className="App">
            <Container maxWidth="xl" sx={{height: "100vh", display: "flex", alignItems: "center"}}>
                <Stack direction="row" flexDirection="row" gap="20px" maxWidth="1536px">
                    {selected > 0 ? <PersonInfo person={persons.content.filter(pers => pers.id === selected)[0]} /> : ""}
                    <Paper sx={{height: "256px", padding: "24px", maxWidth: "100%", overflow: "hidden", borderRadius: 0}}>
                        <Stack direction="row">
                            {data && persons.content !== undefined && persons.content.map(el => (
                                <div onClick={() => selectPerson(el.id)}>
                                    <PersonCard key={el.id} person={el} />
                                </div>
                            ))}
                        </Stack>
                        <EastIcon height="24px" sx={{
                            display: "block",
                            position: "relative",
                            right: 0,
                            float: "right",
                            top: "calc(-100% + 56px)",
                            width: "48px",
                            height: "48px",
                            padding: "12px",
                            borderRadius: "80px",
                            backgroundColor: "#FFF",
                            color: "#000",
                            boxShadow: "0px 4px 20px 0px #0000000D"
                        }}>→</EastIcon>
                    </Paper>
                </Stack>
            </Container>
        </div>
    );
}

export default App;
