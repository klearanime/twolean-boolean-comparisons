/********************
 * YOUR CODE BELOW! *
 ********************/

function moreThan5(num) {
  return num > 5;
}

function topScore(num, num1) {
  return num > num1;
}

function isInDanger(grade) {
  return grade >= 60 && grade <= 71;
}

function isCoasting(grade) {
  return grade >= 72 && grade <= 83;
}

function isSucceeding(grade) {
  return grade >= 84 && grade <= 92;
}
function isFailing(grade) {
  return grade < 60;
} 

function isAcing(grade) {
  return grade > 92;
}

function isStudent(student) {
  return student === 'student';
}

function isTeacher(teacher) {
  return teacher === 'teacher';
}
  
function isAdmin(admin) {
  return admin === 'admin';
}

function isElementary(student) {
  return student === 'elementary';
}

function areDifferentPeople(str, str1) {
  return str !== str1;
}

function isMiddleSchoolTeacher(admin, num) {
  return admin === 'teacher' && num >= 6 && num <= 8; 
}

function notAnElementarySchoolAdministrator(str, str1) {
  return str !== 'elementary' || str1 !== 'admin';   
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
