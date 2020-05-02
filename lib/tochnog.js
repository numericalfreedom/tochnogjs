"use strict" ;


module.exports = { Tochnog } ;


function Tochnog()
 {

  this.area_element_group = area_element_group ;

  return ;

 } ; // end Class Tochnog


/** area_element_group index geometry_entity_item geometry_entity_index element_group

This record is used to generate element_group records. Each element, all of whose nodes are part of the geometry_item, will get an element_group record with value element_group. Please realise that the geometry entity can be a two-dimensional area, a volume, etc. This option comes handy whenever a part of the domain gets some specific element data. For example, this would be the case if different areas in the structure have different material properties like stiffness, etc.

Beware: any directly specified element_group records will be overwritten.

Attention: default this area_element_group will only evaluated at the very start of the calculation. By setting switch in area_element_group_time to -yes however you can require that this record is evaluated at all times.

We show here two ways to get different element data in different regions: Both ways give elements with young 1.2 from x=0 to x=1, and elements with young 3.3 from x=1 to x=2.

First way:

..
node 1 0.
node 2 1.
node 3 2.
element 1 -bar2 1 2
element 2 -bar2 2 3
element_group 1 0
element_group 2 1
..
group_type 0 -materi
group_materi_elasti_young 0 1.2
group_type 1 -materi
group_materi_elasti_young 1 3.3
..
control_mesh_refine_globally 10 -h_refinement
..

Second way:

..
node 1 0.
node 2 1.
node 3 2.
element 1 -bar2 1 2
element 2 -bar2 2 3
..
group_type 0 -materi
group_materi_elasti_young 0 1.2

*/

function area_element_group( index , geometry_entity_item , geometry_entity_index
, element_group )
 {

  console.log( "area_element_group" + geometry_entity_item + geometry_entity_index + element_group ) ;

  return ;

 } ;

