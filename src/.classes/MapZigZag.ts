import { Point } from "pixi.js";

import MapBase from "./MapBase";

export default class MapZigZag implements MapBase {
    private _ground:Slice3;
    private _tileContainer:Sprite = new Sprite;
    private _tiles: array = [];
    private _tileSize: number = 32;
    private _tilesY: number = 4;
    private _cameraMargin: number = 50;
    private _canvasW: number;
    private _canvasH: number;

    public function constructor (): void {
        // var bd       = new TileMap;
        // this._ground = new Slice3(new Bitmap(bd), 96, 32);
        // this._ground.scaleY = -1;

        // this._bgContainer.addChild(this._ground);
        // this._bgContainer.addChild(this._tileContainer);
    }

    public function update (): void {
        // super.update();

        // var minY = Math.floor(Global.canvasH - (this._tileSize + this._tileSize / 2));

        // this.y = Global.canvasH - this._cameraMargin - this.follow.y;
        // this.y = (this.y < minY) ? minY : this.y;

        // var _multiplierY = Math.floor((this.y - Global.canvasH) / this._ground.initialHeight);
        // _multiplierY = _multiplierY < 0 ? 0 : _multiplierY;

        // this._ground.y = -this._ground.initialHeight * _multiplierY;
        // this._ground.y += (this._tileSize + this._tileSize / 2);
    }

    public function draw (): void {
        var max: number,
        t: Tile,
        i: number,
        point: Point;

        this._canvasW  = Math.floor((Global.canvasW - this._tileSize * 2) / this._tileSize) * this._tileSize;
        this._canvasH = Global.canvasH;

        this.x = Math.round(((Global.canvasW - this._canvasW) / 2) + (this._tileSize / 2));

        this._ground.width  = this._canvasW + this._tileSize * 2;
        this._ground.height = this._canvasH * 2;
        this._ground.x      = -(this._tileSize + (this._tileSize / 2));
        this._ground.y      = (this._tileSize + this._tileSize / 2);

        fo (t in this._tiles) {
            t.parent.removeChild(t);
        }

        this._tiles = [];

        max = 400;

        for (i = 0; i < max; i ++) {
            t = new Tile;
            //t.n.text = i.toString();

            point = this.distanceToPoint(i * this._tileSize);

            t.x = point.x;
            t.y = point.y;

            this._tileContainer.addChild(t);
            this._tiles[i] = t;
        }
    }

    public function distanceToPoint (distance: number): Point {
        var tX: number,             // Max tiles in X axis
            tY: number,             // Max tiles in Y axis
            p: Point,                // Point
            stoped_oX: boolean,      // Not move in x axis
            oX: number;             // Orientation in X axis, -1 (left) and 1 (right)

        tX = this._canvasW - this._tileSize;
        tY = (this._tilesY * this._tileSize) - this._tileSize;
        oX = 0;
        p = new Point;

        oX = (distance % ((tX + tY) * 2)) < (tX + tY) ? 1 : -1;
        stoped_oX = !(distance % (tX + tY) < (tX));

        if (stoped_oX) {
            p.x = oX === -1 ? 0 : tX;
        } else {
            p.x = distance % (tX + tY);

            if (oX === -1) {
                p.x = (tX - p.x);
            }
        }

        p.y = Math.floor(distance / (tX + tY)) * tY;

        if (distance % (tX + tY) >= tX) {
            p.y += (distance % (tX + tY)) - tX;
        }

        p.y = -p.y;

        return p;
    }

    override public function distanceToOrientation (distance: number): String {
        var tX: number,             // Max tiles in X axis
            tY: number,             // Max tiles in Y axis
            p:Point,            // Point
            stoped_oX:Boolean,  // Not move in x axis
            oX: number;             // Orientation in X axis, -1 (left) and 1 (right)

        tX = this._canvasW - this._tileSize;
        tY = (this._tilesY * this._tileSize) - this._tileSize;
        oX = 0;

        oX = (distance % ((tX + tY) * 2)) < (tX + tY) ? 1 : -1;
        stoped_oX = !(distance % (tX + tY) < (tX));

        return stoped_oX
                    ? 'up'
                    : (oX === -1 ? 'left' : 'right');
    }
}