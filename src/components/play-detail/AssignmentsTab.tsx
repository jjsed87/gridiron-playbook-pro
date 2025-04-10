
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle } from 'lucide-react';
import { PlayAssignment } from '@/types/play';

interface AssignmentsTabProps {
  assignments: PlayAssignment[];
  playId: string;
}

const AssignmentsTab: React.FC<AssignmentsTabProps> = ({ assignments, playId }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Position Assignments</CardTitle>
          <CardDescription>Responsibilities for each position</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Position</TableHead>
                <TableHead>Assignment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((item, i) => (
                <TableRow key={i} className={item.position.includes("T") || item.position.includes("G") || item.position === "Center" ? "bg-purple-50" : ""}>
                  <TableCell className="font-medium">{item.position}</TableCell>
                  <TableCell>{item.assignment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {playId === "p5" && (
        <Card className="mt-4 border-orange-300 border-2">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <CardTitle className="text-lg">Special Call: "Wall-Street"</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">
              When "Wall-Street" is called:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>Wing pulls instead of Tackle</li>
              <li>Tackle hinges (stays home to protect backside)</li>
              <li>Affects backside protection scheme</li>
            </ul>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AssignmentsTab;
