#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<time.h>

int _init_table(char * table)
{
	strcat(table,"<tr><th>Device</th><th>Value</th></tr>");
	return 0;
}

int main(int argc,char *argv[])
{
	char **bol = {"false","true"};
	printf("{");
	printf("\"%s\":%s,","Deserializer",bol[]);
	printf("}");
    srand(time(NULL));
    int r = rand()%2;
    if(r)
    {
    	printf("pass.png");
    }
    else
    {
    	printf("fail.png");
    }
    return 0;
}
