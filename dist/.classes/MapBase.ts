import { Point } from "pixi.js";

export default interface MapBase {
    distanceToPoint(distance: number): Point;
}