"use strict";

export enum PreviewOption {
    Full,
    Headers,
    Body,
    Exchange
}

export function fromString(value: string): PreviewOption {
    value = value.toLowerCase();
    switch (value) {
        case 'full':
            return PreviewOption.Full;
        case 'headers':
            return PreviewOption.Headers;
        case 'body':
            return PreviewOption.Body;
        case 'exchange':
            return PreviewOption.Exchange;
        default:
            return PreviewOption.Full;
    }
}