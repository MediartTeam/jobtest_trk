import React, {useEffect} from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import img from './7.jpg'

const PersonCard = ({person}) => {
    // useEffect(async () => {
    //     fetch(`https://api.smotrim.ru/api/v1/pictures/${person.picId}/bq/redirect`, {
    //         "referrerPolicy": "same-origin",
    //         "method": "GET",
    //         "mode": "no-cors",
    //     }).then(res => setBlobURL(res));
    // }, [])

    return (
        <Card sx={{boxShadow: "none", overflow: "visible"}}>
            <CardContent sx={{
                padding: 0,
                width: "160px",
                height: "208px",
                display: "flex",
                flexDirection: "column"
            }}>
                <img src={img} style={{position: "relative", width: "144px", height: "144px", top: "8px", left: "8px", borderRadius: "162px"}} />
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