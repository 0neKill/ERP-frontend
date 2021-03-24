import {RouterProps} from "react-router-dom";
import {History, Location} from 'history'

export type Platform = 'yandex' | 'ozon' | 'vozymu' | null;
export type TStatusResponseOpenNotification = 'success' | 'error' | 'info';

export type  OpenNotification = {
    status: TStatusResponseOpenNotification,
    message: string,
    description: string,
    duration: number,
    durationRedirect: number
}

export interface IConfirmResponse {
    status: TStatusResponseOpenNotification,
    title: string,
    subTitle: string,
}

export interface IHistory extends RouterProps {
    history: History
}

export interface ILocation extends RouterProps {
    location: Location
}
