"use strict" ;

/** Tochnogjs module.
 *  @module lib/tochnog
 *  @see module:lib/tochnog
 */

module.exports = { Tochnog } ;



/** Class Tochnog.
 *  @constructor
 */

function Tochnog()
 {

  this.echo = echo ;
  this.area_element_group = area_element_group ;

  return ;

 } ; // end Class Tochnog



/** @function
 *  @name   echo
 *  @param  {String} switchvalue -
 *  @return {void}
 */

function echo( switchvalue )
 {

  if( (switchvalue == '-yes') || (switchvalue == true) )

    console.log( 'echo' + '-yes' ) ;

  else

    console.log( 'echo' + '-no' ) ;

  return ;

 } ; // end function echo()



/** @function
 *  @name   area_element_group
 *  @param  {String} index -
 *  @param  {String} geometry_entity_item -
 *  @param  {String} geometry_entity_index -
 *  @param  {String} element_group -
 *  @return {void}
 */

function area_element_group( index , geometry_entity_item , geometry_entity_index
, element_group )
 {

  console.log( "area_element_group" + ' ' + index + ' ' + geometry_entity_item + ' ' + geometry_entity_index + ' ' + element_group ) ;

  return ;

 } ; // end function area_element_group


