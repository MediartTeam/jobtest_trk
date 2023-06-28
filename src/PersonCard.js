import React, {useEffect, useState} from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import {useStore} from "react-redux";

const PersonCard = ({person}) => {
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.smotrim.ru/api/v1/pictures/${person.picId}/bq/redirect`)
            .then(response => response.blob())
            .then(res => setImage(URL.createObjectURL(res)));
    }, [])

    return (
        <Card sx={{boxShadow: "none", overflow: "visible"}}>
            <CardContent sx={{
                padding: 0,
                width: "160px",
                height: "208px",
                display: "flex",
                flexDirection: "column"
            }}>
                <img src={image} style={{position: "relative", width: "144px", height: "144px", top: "8px", left: "8px", borderRadius: "162px"}} />
                <Typography align="center" sx={{
                    position: "relative",
                    display: "block",
                    height: "24px",
                    top: "10px",
                    left: "8.84px",
                    borderRadius: "8px",
                    gap: "2px",
                    fontFamily: "Sans Serif, Roboto, Verdana",
                    fontSize: "11px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0.5px",
                    textAlign: "center",
                    padding: "4px 8px 4px 8px"
                }}>{person.name}<br/>{person.surname}</Typography>
            </CardContent>
        </Card>
    );
};

export default PersonCard;