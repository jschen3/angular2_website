export class Comment{
	text:string;
	author:string;
	image:string;
	liked: boolean; //look into seperator into a like object. Like object is made up of the liked and likecount
	likeCount: number;
	parentId:string;
	Id:string;
}