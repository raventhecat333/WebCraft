// ==========================================
// Helpers
//
// This file contains helper classes and functions.
// ==========================================

// ==========================================
// Vector class
// ==========================================

function Vector( x, y, z )
{
	this.x = x;
	this.y = y;
	this.z = z;
}

Vector.prototype.add = function( vec )
{
	return new Vector( this.x + vec.x, this.y + vec.y, this.z + vec.z );
}

Vector.prototype.mul = function( n )
{
	return new Vector( this.x*n, this.y*n, this.z*n );
}

Vector.prototype.length = function()
{
	return Math.sqrt( this.x*this.x + this.y*this.y + this.z*this.z );
}

Vector.prototype.normal = function()
{
	if ( this.x == 0 && this.y == 0 && this.z == 0 ) return new Vector( 0, 0, 0 );
	var l = this.length();
	return new Vector( this.x/l, this.y/l, this.z/l );
}

Vector.prototype.toArray = function()
{
	return [ this.x, this.y, this.z ];
}

Vector.prototype.toString = function()
{
	return "( " + this.x + ", " + this.y + ", " + this.z + " )";
}

// lineRectCollide( line, rect )
//
// Checks if an axis-aligned line and a bounding box overlap.
// line = { y, x1, x2 } or line = { x, y1, y2 }
// rect = { x, y, size }

function lineRectCollide( line, rect )
{
	if ( line.y != null )
		return rect.y > line.y - rect.size/2 && rect.y < line.y + rect.size/2 && rect.x > line.x1 - rect.size/2 && rect.x < line.x2 + rect.size/2;
	else
		return rect.x > line.x - rect.size/2 && rect.x < line.x + rect.size/2 && rect.y > line.y1 - rect.size/2 && rect.y < line.y2 + rect.size/2;
}