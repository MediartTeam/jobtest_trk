import {useGetPersonsQuery} from "./store/api.slice";
import React, {useEffect, useRef, useState} from "react";
import {Paper, Container, Stack} from "@mui/material";
import PersonCard from "./PersonCard";
import {East, West} from '@mui/icons-material';
import PersonInfo from "./PersonInfo";
import {LeftArrow, RightArrow} from "./config";

function App() {
    const [persons, setPersons] = useState([])
    const {data, isLoading } = useGetPersonsQuery()
    const [selected, setSelected] = useState(0)
    const [carouselX, setCarouselX] = useState(0)
    const CarouselReffer = useRef(null)
    const PaperReffer = useRef(null)
    const [LeftDisabled, setleftDisabled] = useState(true)
    const [RightDisabled, setRightDisabled] = useState(false)

    useEffect(()=>{
        if(!isLoading){
            let answer = data["data"]["content"].filter(child => child.title === "Персоны")
            setPersons(answer[0]["content"])
        }
    }, [isLoading])

    const selectPerson = (id) => {
        setSelected(id)
    }

    const swapPersons = (e, direction) => {
        //size
        let ScrollSize = 2

        ScrollSize = ScrollSize * 160
        if(direction === "right"){
            if(PaperReffer.current.clientWidth + Math.abs(carouselX) > CarouselReffer.current.scrollWidth){
                setCarouselX(PaperReffer.current.clientWidth - CarouselReffer.current.scrollWidth - 24)
                setRightDisabled(true)
            }else if((carouselX - ScrollSize) < (PaperReffer.current.clientWidth - CarouselReffer.current.scrollWidth - 24)){
                setCarouselX(PaperReffer.current.clientWidth - CarouselReffer.current.scrollWidth - 24)
                setRightDisabled(true)
            }else{
                setCarouselX(carouselX - ScrollSize)
            }
            setleftDisabled(false)
        }else{
            if(carouselX + ScrollSize > 0){
                setCarouselX(0)
                setleftDisabled(true)
            }else{
                setCarouselX(carouselX + ScrollSize)
            }
            setRightDisabled(false)
        }
    }

    return (
        <div className="App">
            <Container maxWidth="lg" sx={{height: "100vh", display: "flex", alignItems: "center"}}>
                <Stack direction="row" flexDirection="row" gap="20px" maxWidth="lg">
                    {selected > 0 ? <PersonInfo person={persons.filter(pers => pers.id === selected)[0]} /> : ""}
                    <Paper sx={{height: "256px", padding: "24px", maxWidth: "100%", overflow: "hidden", borderRadius: 0}} ref={PaperReffer}>
                        <West
                            onClick={(event) => swapPersons(event, "left")}
                            sx={{...LeftArrow, color: LeftDisabled ? "#CCC" : "#000"}}
                        >→</West>
                        <Stack
                            ref={CarouselReffer}
                            direction="row"
                            style={{transform: `translate(${carouselX}px, 0px)`, transition: "1s", position: "relative", left: "-48px"}}
                        >
                            {persons && persons.map(el => (
                                <div onClick={() => selectPerson(el.id)}>
                                    <PersonCard key={el.id} person={el} />
                                </div>
                            ))}
                        </Stack>
                        <East
                            onClick={(event) => swapPersons(event, "right")}
                            sx={{...RightArrow, color: RightDisabled ? "#CCC" : "#000"}}
                        >→</East>
                    </Paper>
                </Stack>
            </Container>
        </div>
    );
}

export default App;
