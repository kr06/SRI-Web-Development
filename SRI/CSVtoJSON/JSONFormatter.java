import java.io.*;
import java.util.*;
import java.nio.file.*;
/**
 * Takes in a CSV file containing data from the SRI's surveys and 
 * reformats the data in JSON format, to be used in a webpage.
 * 
 * @author Dan Carpenter and Koushik Pernati
 * @version 9.28.2016
 */
public class JSONFormatter
{
    public static void main() {
        String filename = "UpstateCEO2015 Crosstabs Final.csv";
        String testFile = "test.csv";
        try(Scanner in = new Scanner(new File("C:\\Users\\SoftEngAdmin\\Documents\\SRI\\SRI JSON Formatting\\SRI\\" + testFile));
        PrintWriter out = new PrintWriter("C:\\Users\\SoftEngAdmin\\Documents\\SRI\\SRI JSON Formatting\\SRI\\formattedData.json")) {
            System.out.print("{\"Data\" : [");
            while (in.hasNextLine()) {
                String line = in.nextLine();
                String ques = line.substring(0, line.length()-19);
                //get the categories
                ArrayList<String> categories = null;
                if (in.hasNextLine())  categories = new ArrayList<>(Arrays.asList(in.nextLine().split(",")));
                //remove all empty string entries
                for (int i = 0; i < categories.size(); i++) {
                    if (categories.get(i).equals("")){
                        categories.remove(i);
                        i--;
                    }
                }
                categories.add(0, "Upstate");  //add upstate to start of categories list

                //get the filters
                ArrayList<String> filters = new ArrayList<>(Arrays.asList(in.nextLine().split(",")));
                //remove all empty string entries
                int countF = 0;
                for (int i = 0; i < filters.size(); i++) {
                    if (filters.get(i).equals("")) {
                        filters.remove(i);
                        i--;
                    }
                    else if (countF <= 4) filters.set(i, filters.get(i) + "#Upstate");
                    else if (countF <= 8) filters.set(i, filters.get(i) + "#Region");
                    else if (countF <= 11) filters.set(i, filters.get(i) + "#Cluster");
                    else if (countF <= 14) filters.set(i, filters.get(i) + "#Company Size");
                    else  filters.set(i, filters.get(i) + "#Industry");
                    countF++;
                }

                //get the data
                ArrayList<String> answers = new ArrayList<>();
                int[][] data = new int[25][25];
                int numEntries = 0;
                int count = -1;
                if (in.hasNextLine())  line = in.nextLine();
                else line = "";
                while (!line.replaceAll(",", "").equals("")) {
                    String[] lineArray = line.split(",");
                    numEntries = lineArray.length;
                    for (int j = 0; j < lineArray.length; j++) {
                        String s  = lineArray[j];
                        if (!s.contains("%") && !s.equals("NA") && !s.equals("")) {
                            answers.add(s);
                            count++;
                        }
                        else {
                            if (!s.equals("NA") && !s.equals(""))
                                data[count][j] = Integer.parseInt(s.replaceAll("%", ""));
                        }
                    }
                    if (in.hasNextLine())  line = in.nextLine();
                    else line = "";
                }
                System.out.println("{ \"Question\" : \"" + ques + "\", ");

                System.out.println("\"Categories\" : [");
                int counter = 0;
                for (int c = 0; c < categories.size(); c++) {
                    System.out.println("\t{\"Category\" : \"" + categories.get(c) + "\", \"Filters\" : [");
                    for (int f = counter; f < filters.size(); f++) {
                        if (filters.get(f).toLowerCase().contains(categories.get(c).toLowerCase())) {
                            System.out.println("\t\t{\"Filter\" : \"" + filters.get(f).substring(0, filters.get(f).indexOf("#")) + "\", \"Answers\" : [");
                            counter++;
                        }
                        else {
                            System.out.println("\t]},");
                            break;
                        }
                        for (int a = 0; a < answers.size(); a++) {
                            System.out.print("\t\t\t{\"Answer\" : \"" + answers.get(a) + "\", \"Value\" : \"" + data[a][f+1] + "\"}");
                            if (a < answers.size()-1) System.out.println(",");
                            else if (a == answers.size()-1 && f != filters.size()-1 && filters.get(f+1).toLowerCase().contains(categories.get(c).toLowerCase()))  System.out.println("\n\t\t]},");
                            else System.out.println("\n\t\t]}");
                        }
                    }                    
                }
                System.out.println("\t]}");
                System.out.print("]}");
                if(in.hasNextLine()){
                    System.out.println(",");
                }
                else System.out.println();
            }
            System.out.println("]}");
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}
